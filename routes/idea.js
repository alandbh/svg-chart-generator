var express = require("express");
var router = express.Router();

function ideaService(req) {
    const {
        g1 = 1,
        g2 = 1,
        g3 = 1,
        g4 = 1,
        r = 1,
        size = 336,
        bg = "ccc",
        red = "ff0000",
    } = req;

    const halfSquare = size / 2;

    /**
     * Setting the opacity of the red shape
     */

    const minScore = 4;
    const maxScore = 16;

    function getOpacity(score) {
        if (!score || score <= minScore) {
            return 0;
        } else if (score > maxScore) {
            return 1;
        }

        return (score - minScore) / (maxScore - minScore);
    }

    let cornerOpacity = {
        g1: g1 <= 1 ? 0 : 1,
        g2: g2 <= 1 ? 0 : 1,
        g3: g3 <= 1 ? 0 : 1,
        g4: g4 <= 1 ? 0 : 1,
    };

    /** END - set opacity */

    function getGCoord(quadrant) {
        let score = req[quadrant];
        if (score > 4) {
            score = 4;
        } else if (score < 1) {
            score = 1;
        }

        const quadrantMapping = {
            g1: `${halfSquare - (halfSquare * score) / 4} ${
                halfSquare - (halfSquare / 4) * score
            }`,
            g2: `${(halfSquare * score) / 4 + halfSquare} ${
                halfSquare - (halfSquare / 4) * score
            }`,
            g3: `${(halfSquare * score) / 4 + halfSquare} ${
                halfSquare + (halfSquare / 4) * score
            }`,
            g4: `${halfSquare - (halfSquare * score) / 4} ${
                halfSquare + (halfSquare / 4) * score
            }`,
        };
        return quadrantMapping[quadrant];
    }

    const svgIdea = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_465_51)">
    <g clip-path="url(#clip1_465_51)">
    <rect width="${size}" height="${size}" fill="black"/>
    <path d="M1.67993 1.00977L${size - 0.7} ${
        size - 0.7
    }" stroke="#2E2E2E" stroke-width="1.3456"/>
    <path d="M1.44666 ${size - 0.3}L${
        size - 0.7
    } 1" stroke="#2E2E2E" stroke-width="1.3456"/>
    </g>
    <rect x="0.619235" y="0.619235" width="${size - 1.3}" height="${
        size - 1.3
    }" stroke="#2E2E2E" stroke-width="1.23847"/>
    <path d="M ${getGCoord("g1")} L${getGCoord("g2")}L${getGCoord(
        "g3"
    )}L${getGCoord("g4")}L${getGCoord("g1")}Z" fill="#${bg}"/>
    <path d="M${getGCoord("g1")}L${getGCoord("g2")}L${getGCoord(
        "g3"
    )}L${getGCoord("g4")}L${getGCoord(
        "g1"
    )}Z" fill="#${red}" id="color_shape" fill-opacity="${getOpacity(r)}"/>
    <path d="M0 ${size - 4}H4V${size}H0L0 ${size - 4}Z" fill="#666666"/>
    <path d="M${size - 4} ${size - 4}H${size}V${size}H${size - 4}V${
        size - 4
    }Z" fill="#666666"/>
    <path d="M${size - 4} 0L${size} 0V4H${size - 4}V0Z" fill="#666666"/>
    <path d="M0 0L4 0V4H0L0 0Z" fill="#666666"/>
    <path d="M0 0L4 0V4H0L0 0Z" fill="white" fill-opacity="${
        cornerOpacity.g1
    }"/>
    <path d="M${size - 4} 0L${size} 0V4H${
        size - 4
    }V0Z" fill="white" fill-opacity="${cornerOpacity.g2}"/>
    <path d="M${size - 4} ${size - 4}H${size}V${size}H${size - 4}V${
        size - 4
    }Z" fill="white" fill-opacity="${cornerOpacity.g3}"/>
    <path d="M0 ${size - 4}H4V${size}H0L0 ${
        size - 4
    }Z" fill="white" fill-opacity="${cornerOpacity.g4}"/>
    </g>
    <defs>
    <clipPath id="clip0_465_51">
    <rect width="${size}" height="${size}" fill="white"/>
    </clipPath>
    <clipPath id="clip1_465_51">
    <rect width="${size}" height="${size}" fill="white"/>
    </clipPath>
    </defs>
    </svg>    
    `;

    return svgIdea;
}

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.setHeader("content-type", "image/svg+xml");
    res.send(ideaService(req.query));
});

module.exports = router;
