;(function() {
    function HouseBuilder() {
        var self = this;
        this.rolling = document.getElementById('rolling');
        this.numberOfFloors = document.getElementById('numberOfFloors');
        this.square = document.getElementById('square');
        this.rolling.addEventListener('input', function () {
            self.init();
        });


    }

    HouseBuilder.prototype.showFloors = function() {
        this.numberOfFloors.value = this.rolling.value;
    };


    HouseBuilder.prototype.renderFloor = function(){
        var fragment = document.createDocumentFragment(),

            floorsNumber = this.rolling.value;

         this.square.innerHTML = '';

         for (var i = 0; i < floorsNumber; i++) {

            var floor = document.createElement('div');

            var win = document.createElement('div');

                floor.classList.add('floor');
                win.classList.add('win');

                floor.appendChild(win);

                floor.appendChild(win.cloneNode(true));

            fragment.appendChild(floor);
        }
        return fragment;
    };

    HouseBuilder.prototype.getFloors = function() {
        return this.renderFloor();
    };

    HouseBuilder.prototype.addFloor = function() {
        this.floors = this.getFloors();
        this.square.appendChild(this.floors);
    };

    HouseBuilder.prototype.init = function(){
        this.addFloor();
        this.showFloors();
    };

    var houseBuilder = new HouseBuilder();

         houseBuilder.init();

}());