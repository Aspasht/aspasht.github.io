// @ts-ignore
import Typed from 'typed.js';
interface TypedWithDestroy extends Typed {
    destroy(): void;
    cursor: any;
}

export function typed(el: React.RefObject<any>, value: any, time: Number, onComplete?: () => void): TypedWithDestroy {
    const typedInstance = new Typed(el.current, {
        strings: [` ^1000 ${value}`],
        typeSpeed: time,
        onComplete: function (self: TypedWithDestroy) {
            self.cursor.classList.add('invisible');
            if (onComplete) {
                onComplete();
            }
        },
    });

    return typedInstance;
}