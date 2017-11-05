class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
    }
    clickAction() {
        this.element.click(() => {
            if (this.num < 10) {
                this.element.css('-webit-filter', 'grayscale(0)');
                $("#animation").addClass('num');
                this.num = add(this.num);
                setTimeout(function() {
                    $("#animation").removeClass("num");
                });
            } else {
                this.element.css('-webit-filter', 'grayscale(1)');
                this.num = 0;
            }
            console.log(this.num);
        });
    }
}

class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default { Thumb };
