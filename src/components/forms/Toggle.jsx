// Toggle.jsx
// 코드 작성자 : GiHhub @whitedev77773

// 외부 라이브러리에서 import
import styled from 'styled-components';

// 사용자가 생성한 컴포넌트 및 JS파일 import

/**
 * @typedef {"xs" | "s" | "m" | "l" | "xl" | string } Size
 * @typedef {"--primary-color" | "#FFFFFF" | "white" | string} Color
 *
 * @typedef {Object} IToggle
 * @property {Size} size
 * @property {Color} color
 * @property {boolean} checked
 * @property {function} onChange
 */
// IToogle이라는 이름으로 새로운 컴포넌트를 생성합니다.
const IToggle = styled.label`
    position: relative;
    display: inline-block;

	${(props) => {
        switch (props.$size) {
            case "s":
                return "width: 40px; height: 20px;";
            case "m":
                return "width: 48px; height: 24px;";
            case "l":
                return "width: 56px; height: 28px;";
            default:
				console.warn("[Toggle.jsx] 정의되지 않은 사이즈입니다. 기본값으로 적용됩니다.");
                return `width: 48px; height: 24px;`;
        }
    }}
`;

// Checkbox를 통해 토글 버튼이 활성화 상태인지 판단합니다.
const Checkbox = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    width: 0;
    height: 0;
`;

// 토글 버튼 본체 :before가 좌우로 움직이는 동그란 버튼입니다.
const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--secondary-text-color);
    transition: 0.4s ease-out;
    border-radius: ${(props) => {
        switch (props.$size) {
            case "s":
                return "20px;";
            case "m":
                return "24px;";
            case "l":
                return "28px;";
            default:
                return `24px;`;
        }
    }};

    &:before {
        position: absolute;
        content: '';
        width: 16px;
        height: 16px;
		${(props) => {
			switch (props.$size) {
				case "s":
					return "width: 12px; height: 12px;";
				case "m":
					return "width: 16px; height: 16px;";
				case "l":
					return "width: 20px; height: 20px;";
				default:
					return `width: 48px; height: 24px;`;
			}
		}}
        left: 4px;
        bottom: 4px;
        background-color: #ffffff;
        transition: 0.3s ease-out;
        border-radius: 50%;
    }

    ${Checkbox}:checked + & {
        background-color: ${(props) => {
            if (props.$color?.startsWith("--")) {
                return `var(${props.$color});`;
            }
            else {
                return props.$color ?? "var(--primary-color)";
            }
<<<<<<< HEAD
        }};;
=======
        }};
>>>>>>> fab44530a51b0689aaf1a24b18b980685fd98a61
    }

    ${Checkbox}:checked + &:before {
        transform: translateX(${(props) => {
			switch (props.$size) {
				case "s":
					return "20px";
				case "m":
					return "24px";
				case "l":
					return "28px";
				default:
					return `24px`;
			}
		}});
		background-color: #ffffff;
    }
`;

/**
 * @typedef {IToggle.IToggle} ICheckbox
 */

/**
 * Toggle Component
 * 토글 버튼 처럼 스타일링된 input[type="checkbox"]를 생성합니다.
 * @param {IToggle} props
 */
export const Toggle = ({ size="m", color="--primary-color", checked, onChange=()=>{} }) => {
    return (
        <IToggle $size={size}>
            <Checkbox onChange={onChange} checked={checked} />
            <Slider $size={size} $color={color} />
        </IToggle>
    );
}
