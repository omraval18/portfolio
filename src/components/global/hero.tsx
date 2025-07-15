import AnimatedGradientBackground from "./animated-gradient-bg-";
import ASCIIText from "./ascii";

export function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatedGradientBackground />
            <ASCIIText text="Om Raval" enableWaves={false} asciiFontSize={8} textFontSize={96} />
        </div>
    );
}