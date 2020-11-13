const app = new Vue ({
    el:'#app',
    data:{
        field: [],
        snakePosition:[
            {
                axisY: 1,
                axisX: 1,
            },
            // {
            //     axisY: 1,
            //     axisX: 2,
            // },
        ],
        flowerPosition:{},
        time:200,
        right:0,
        left:0,
        up:0,
        down:0,
        intervalFlower: 0,
        point: 0,
        intervalPoint: 0,


    },
    created(){
        this.initialFunction();
    },
    methods:{
        initialFunction(){
            this.createBox();
            this.startflower();
            this.setPointInterval();
        },
        createBox(){
            for (let i = 1; i<= 20; i++){
                for (let j = 1; j<= 20; j++)
                this.field.push({
                    axisY: i,
                    axisX: j,
                });
            };
        },
        goRight(){
            if (this.right === 0 && this.left === 0){
                this.right = setInterval(() =>{
                    this.snakePosition.forEach((single,index) =>{
                        single.axisX ++;
                        if (single.axisX > 20){
                            single.axisX = 1;
                        };
                    })
                }, this.time);
                clearInterval(this.left);
                clearInterval(this.up);
                clearInterval(this.down);
                this.left= 0;
                this.up= 0;
                this.down= 0 ;
        
            }
        },
        goLeft(){
            if (this.left === 0 && this.right === 0){
                this.left = setInterval(() =>{
                    this.snakePosition.forEach((single,index) =>{
                        single.axisX --;
                        if (single.axisX < 1){
                            single.axisX = 20;
                        };
                    })
                }, this.time);
                clearInterval(this.right);
                clearInterval(this.up);
                clearInterval(this.down);
                this.right = 0;
                this.up = 0;
                this.down = 0;
            }
        },
        goDown(){
            if (this.down === 0 && this.up === 0){
                this.down = setInterval(() =>{
                   this.snakePosition.forEach((single,index) =>{
                       single.axisY ++;
                       if (single.axisY > 20){
                           single.axisY = 1;
                       };
                   })
               },this.time);
               clearInterval(this.right);
               clearInterval(this.up);
               clearInterval(this.left);
               this.right = 0;
               this.left = 0;
               this.up = 0;
            }
        },
        goUp(){
            if (this.down === 0 && this.up === 0){
                this.up = setInterval(() =>{
                    this.snakePosition.forEach((single,index) =>{
                        single.axisY --;
                        if (single.axisY < 1){
                            single.axisY = 20;
                        };
                    })
                },this.time);
                clearInterval(this.right);
                clearInterval(this.left);
                clearInterval(this.down);
                this.right = 0;
                this.left = 0;
                this.down = 0;
            }    
        },
        randomNumber(){
            return Math.floor(Math.random() * 20) +1;
        },
        putFlower(){
            this.flowerPosition = {
                axisX: this.randomNumber(),
                axisY: this.randomNumber(),
            };
        },
        changeFlower(){
            this.intervalFlower = setInterval(this.putFlower, 10000);
        },
        startflower(){
            this.putFlower();
            this.changeFlower();
        },
        makePoint(){
            if (this.flowerPosition.axisX == this.snakePosition[0].axisX && 
                this.flowerPosition.axisY == this.snakePosition[0].axisY){
                    this.point++;
                    clearInterval(this.intervalFlower);
                    this.startflower();
            };
        },
        setPointInterval(){
            this.intervalPoint = setInterval(this.makePoint, this.time)
        }

        
    }
});