import FlashcardProps from "../../interfaces/IFlashcard";
import {useState} from "react";
import "./Flashcard.scss";

function Flashcard(
    {
        frontHTML,
        frontCardStyle,
        frontContentStyle,
        backHTML,
        backCardStyle,
        backContentStyle,
        className = "",
        style,
        height,
        borderRadius = "1rem",
        width,
        onCardFlip = (state = false) => {
        },
        manualFlipRef,
    }: FlashcardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
            className={`FlashcardWrapper ${className}`}
            style={{
                height: height,
                width: width,
                ...style
            }}
        >
            <div
                className={`FlashcardWrapper__item ${
                    isFlipped ? "FlashcardWrapper__item--flip" : ""
                }`}
                style={{
                    borderRadius
                }}
                onClick={() => {
                    if (manualFlipRef?.current) return;
                    setIsFlipped(!isFlipped);
                    onCardFlip(!isFlipped);
                }}
            >
                <div
                    className="FlashcardWrapper__item--front"
                >
                    {typeof frontHTML !== "string" ?
                        (
                            <div 
                                className="FlashcardWrapper__item--content"
                                style={frontContentStyle}
                            >
                                {frontHTML}
                            </div>
                        )
                        : (
                            <div
                                className="FlashcardWrapper__item--content"
                                style={frontContentStyle}
                                dangerouslySetInnerHTML={{__html: frontHTML}}
                            />
                        )

                    }
                </div>
                <div
                    className="FlashcardWrapper__item--back"
                >
                    {typeof backHTML !== "string" ?
                        (
                            <div
                                className="FlashcardWrapper__item--content"
                                style={backContentStyle}
                            >
                                {backHTML}
                            </div>
                        )
                        : (
                            <div
                                className="FlashcardWrapper__item--content"
                                style={backContentStyle}
                                dangerouslySetInnerHTML={{__html: backHTML}}
                            />
                        )

                    }
                </div>

            </div>
        </div>
    )
}

export default Flashcard;