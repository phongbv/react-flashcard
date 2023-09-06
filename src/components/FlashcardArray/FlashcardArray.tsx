import FlashcardArrayProps from "../../interfaces/IFlashcardArray";
import React, { useState } from "react";
import Flashcard from "../Flashcard/Flashcard";
import "./FlashcardArray.scss"

function FlashcardArray({
    cards,
    controls = true,
    showCount = true,
    onCardChange = () => {
    },
    onCardFlip = () => {
    },
    frontCardStyle = {},
    frontContentStyle = {},
    backCardStyle = {},
    backContentStyle = {},
    forwardRef,
    FlashcardArrayStyle = {},
    currentCardFlipRef,
    cycle = false,
}: FlashcardArrayProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const placeFillerCard = (
        <Flashcard
            className="FlashcardArrayWrapper__empty"
            width="100%"
            backHTML=""
            frontHTML={<h1>Empty data</h1>}
        />
    );
    const cardNumber = cards?.length == undefined ? 0 : cards.length;
    const currentCardItem = cards[currentIndex];
    const prevCard = function () {

    }
    const nextCard = function () {
    }
    return (
        <div className="FlashcardArrayWrapper" style={FlashcardArrayStyle}>
            {cardNumber == 0 ?
                placeFillerCard :
                <div
                    className="FlashcardArrayWrapper__CardHolder"
                >
                    <Flashcard
                        backHTML={currentCardItem.backHTML}
                        frontHTML={currentCardItem.frontHTML}
                        manualFlipRef={currentCardFlipRef}
                        frontCardStyle={{ ...currentCardItem.frontCardStyle, ...frontCardStyle }}
                        frontContentStyle={{ ...currentCardItem.frontContentStyle, ...frontContentStyle }}
                        backCardStyle={{ ...currentCardItem.backCardStyle, ...backCardStyle }}
                        backContentStyle={{ ...currentCardItem.backContentStyle, ...backContentStyle }}
                        className={currentCardItem.className}
                        height={currentCardItem.height || "100%"}
                        width={currentCardItem.width || "100%"}
                        style={currentCardItem.style}
                        onCardFlip={(state) => {
                            onCardFlip(currentCardItem.id, currentIndex, state);
                        }}
                    />

                </div>

            }
            {(controls || showCount) && (
                <div className="FlashcardArrayWrapper__controls">
                    {controls && (
                        <button onClick={() => prevCard()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{ height: "24px", width: "24px" }}
                            >
                                <path
                                    d="M19 12a1 1 0 0 1-1 1H8.414l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L8.414 11H18a1 1 0 0 1 1 1z"
                                    style={{ fill: "#1c1b1e", height: "24px", width: "24px" }}
                                    data-name="Left"
                                />
                            </svg>
                        </button>
                    )}
                    {showCount && (
                        <span className="FlashcardArrayWrapper__controls--count">
                            {currentIndex + 1}/{cardNumber}
                        </span>
                    )}
                    {controls && (
                        <button onClick={() => nextCard()}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                style={{ height: "24px", width: "24px" }}
                            >
                                <path
                                    d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                                    style={{ fill: "#1c1b1e", height: "24px", width: "24px" }}
                                    data-name="Right"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default FlashcardArray;