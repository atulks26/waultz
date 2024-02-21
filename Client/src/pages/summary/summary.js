import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./summary.css";

const TextExtraction = () => {
    const [text, setText] = useState("");
    const [keypoints, setKeypoints] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            const extractedText = await extractTextFromImage(file);
            setText(extractedText);
            const textLines = extractedText.split("\n");
            const relevantKeypoints = findRelevantKeypoints(textLines);
            setKeypoints(relevantKeypoints);
        } catch (error) {
            console.error("Error handling file upload:", error);
        }
    };

    const extractTextFromImage = async (imageFile) => {
        try {
            const {
                data: { text },
            } = await Tesseract.recognize(imageFile, "eng", {
                logger: (m) => console.log(m),
            });
            return text;
        } catch (error) {
            console.error("Error extracting text from image:", error);
            return "";
        }
    };

    const findRelevantKeypoints = (textLines) => {
        return textLines.filter(
            (line) =>
                line.includes("suspect") ||
                line.includes("victim") ||
                line.includes("crime") ||
                line.includes("location") ||
                line.includes("witness") ||
                line.includes("incident") ||
                line.includes("description") ||
                line.includes("weekly")
        );
    };

    return (
        <div className="summary">
            <div className="summary">
                <h1>Text Extraction and Key Points Generation</h1>
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                />
                {text && (
                    <div>
                        <h2>Extracted Text</h2>
                        <pre>{text}</pre>
                    </div>
                )}
                {keypoints.length > 0 && (
                    <div>
                        <h2>Key Points</h2>
                        <ul>
                            {keypoints.map((keypoint, index) => (
                                <li key={index}>{keypoint}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextExtraction;
