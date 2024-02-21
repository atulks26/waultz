import React, { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc, addDoc, collection } from "@firebase/firestore";
import "./anonymous.css";

// Import the Firebase Realtime Database module

const firebaseConfig = {
    // Your Firebase project configuration
};

const Anonymous = () => {
    const [feedbackText, setFeedbackText] = useState("");
    const [moderationResult, setModerationResult] = useState(null);
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    // Function to handle content moderation
    const moderateContent = async () => {
        // Load sample data (replace this with your own dataset)
        const data = {
            text: [
                "This is a normal comment",
                "I hate this product",
                "I love this product",
                "You suck!",
                "Great job!",
            ],
            label: [0, 1, 0, 1, 0], // 0 for non-offensive, 1 for offensive
        };

        // Preprocess data (tokenization, vectorization, etc.)

        // Train a simple model
        const model = tf.sequential();
        model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
        model.compile({ optimizer: "sgd", loss: "meanSquaredError" });

        // Convert text input to numerical features (e.g., word embeddings)

        // Train the model (replace this with your actual training code)
        const trainX = tf.tensor2d([[1], [2], [3], [4], [5]]);
        const trainY = tf.tensor2d([[0], [1], [0], [1], [0]]);
        await model.fit(trainX, trainY, { epochs: 100 });

        // Predict moderation result for feedbackText using the model
        const inputX = tf.tensor2d([[6]]);
        const prediction = model.predict(inputX);
        const moderationResultFromModel =
            prediction.dataSync()[0] > 0.5 ? 1 : 0;

        // Check if certain offensive words are present in the feedbackText
        const offensiveWords = ["hate", "suck"]; // Add more offensive words as needed
        const hasOffensiveWords = offensiveWords.some((word) =>
            feedbackText.toLowerCase().includes(word)
        );
        // Determine the final moderation result
        let finalModerationResult;
        if (moderationResultFromModel === 1 || hasOffensiveWords) {
            finalModerationResult = 1; // Offensive
            setShowSubmitButton(false); // Hide the submit button
        } else {
            finalModerationResult = 0; // Non-offensive
            setShowSubmitButton(true); // Show the submit button
        }

        // Display moderation result
        setModerationResult(finalModerationResult);
    };

    // Function to handle submission
    const handleSubmit = async () => {
        try {
            const docRef = await addDoc(collection(firestore, "anonymous"), {
                text: feedbackText,
                moderationResult:
                    moderationResult === 0 ? "Non-offensive" : "Offensive",
            });

            // Reset feedback text
            setFeedbackText("");

            console.log("Feedback submitted:", feedbackText);
        } catch (error) {
            console.error("Error submitting feedback:", error);
        }

        // Add feedback to Firebase database // Reference to the 'feedback' node
        // const docRef = doc(firestore, "anonymous");
        // let current = {
        //     text: feedbackText,
        //     moderationResult:
        //         moderationResult === 0 ? "Non-offensive" : "Offensive",
        // };
        // await setDoc(docRef, feedbackText);

        // // Reset feedback text
        // setFeedbackText("");

        // console.log("Feedback submitted:", feedbackText);
    };

    return (
        <div className="anonymous">
            <div className="anonymous-card">
                <h1>Feedback</h1>
                <textarea
                    placeholder="Type something..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                />
                <button onClick={moderateContent}>Check Content</button>
                {moderationResult !== null && (
                    <div>
                        <h2>Moderation Result</h2>
                        <p>
                            {moderationResult === 0
                                ? "Non-offensive"
                                : "Offensive"}
                        </p>
                    </div>
                )}
                {showSubmitButton && (
                    <button onClick={handleSubmit}>Submit</button>
                )}
            </div>
        </div>
    );
};

export default Anonymous;
