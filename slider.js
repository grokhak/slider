$(function(){

    function Slider(el) {
        this.initialize(el);
    }

    Slider.prototype.initialize = function(el) {
        this.$el = $(el);
        this.$slider = this.$el.find('.slider');
        this.$slides = this.$slider.find('li');
        this.$len = this.$slides.length;
        this.$next = this.$el.find('.slider_next');
        this.$select = this.$el.find('.slider_select');
        this.$selectBtn = this.$select.find('li');
        this.$cullent = 0;
        this.$slides.eq(0).show();
        this.$selectBtn.eq(0).addClass('current');
        this.handleEvents();
        this.setTimer();
    };

    Slider.prototype.handleEvents = function() {
        var self = this;

        this.$next.on("click", function() {
            self.$cullent++;
    
            self.changeSlide();
            self.resetTimer();
        });

        this.$selectBtn.on("click", function() {
            self.$cullent = self.$selectBtn.index(this);
    
            self.changeSlide();
            self.resetTimer();
        });

    };

    Slider.prototype.setTimer = function() {
        var self = this;

        this.timer = setInterval(function() {
            self.$cullent++;
            self.changeSlide();
        }, 5000);
    }

    Slider.prototype.resetTimer = function() {
        var self = this;

        clearInterval(self.timer);
        this.setTimer();
    }

    Slider.prototype.changeSlide = function() {
        this.$cullent = this.$cullent % this.$len;

        this.$slides.fadeOut();
        this.$slides.eq(this.$cullent).fadeIn();

        this.$selectBtn.removeClass('current');
        this.$selectBtn.eq(this.$cullent).addClass('current');
    }

    var slider = new Slider('#slider_wrapper');

});
