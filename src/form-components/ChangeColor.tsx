import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const DEFAULT_COLOR = COLORS[0];
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(e: React.ChangeEvent<HTMLInputElement>) {
        setColor(e.target.value);
    }

    return (
        <div>
            {COLORS.map((curColor: string) => (
                <Form.Check
                    inline
                    type="radio"
                    key={curColor}
                    onChange={updateColor}
                    value={curColor}
                    label={curColor}
                    checked={curColor === color}
                    style={{
                        backgroundColor: curColor
                    }}
                />
            ))}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    display: "inline-block",
                    marginLeft: "5px"
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
