// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Upload {
  
  struct Access {
    address user;
    uint256[] fileIndexes; // Array of indexes of allowed files
  }

  mapping(address => string[]) private value; // Mapping of addresses to their files
  mapping(address => mapping(address => Access)) private accessList;

  function add(address _user, string memory url) external {
    value[_user].push(url);
  }

  function shareFile(address user, uint256 fileIndex) external {
    require(value[msg.sender].length > fileIndex, "Invalid file index");

    if (accessList[msg.sender][user].user == address(0)) { // User not in access list yet
      accessList[msg.sender][user] = Access(user, new uint256[](0));
    }

    accessList[msg.sender][user].fileIndexes.push(fileIndex);
  }

  function revokeFileAccess(address user, uint256 fileIndex) external {
    require(accessList[msg.sender][user].user != address(0), "User doesn't have access");

    uint256[] storage fileIndexes = accessList[msg.sender][user].fileIndexes;

    // Find and remove the file index from the user's access list
    for (uint256 i = 0; i < fileIndexes.length; i++) {
      if (fileIndexes[i] == fileIndex) {
        fileIndexes[i] = fileIndexes[fileIndexes.length - 1];
        fileIndexes.pop();
        break;
      }
    }
  }

  function display(address _user) external view returns (string[] memory) {
    require(_user == msg.sender || hasAccess(msg.sender, _user), "You don't have access");
    string[] memory userFiles = new string[](0);

    if (hasAccess(_user, msg.sender)) { // Check if user has access to view your files
      userFiles = value[msg.sender];
    } else { // Filter files based on user's access list
      uint256[] memory allowedIndexes = accessList[_user][msg.sender].fileIndexes;
      for (uint256 i = 0; i < allowedIndexes.length; i++) {
        userFiles[i] = value[msg.sender][allowedIndexes[i]];
      }
    }

    return userFiles;
  }

  function hasAccess(address owner, address user) private view returns (bool) {
    return owner == user || accessList[owner][user].user != address(0);
  }
}
