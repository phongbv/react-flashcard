import FlashcardArrayProps from "../../interfaces/IFlashcardArray";
import React, {useState} from "react";
import Flashcard from "../Flashcard/Flashcard";

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

    return (
        <div>
            {cardNumber == 0 ?
                placeFillerCard :
                <Flashcard
                    backHTML={currentCardItem.backHTML}
                    frontHTML={currentCardItem.frontHTML}
                    manualFlipRef= {currentCardFlipRef}
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
            }
        </div>
    )
}

export default FlashcardArray;