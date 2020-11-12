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
        time:100,
        right:0,
        left:0,
        up:0,
        down:0,

    },
    created(){
        this.createBox();
    },
    methods:{
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
        },
        goLeft(){
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
        },
        goDown(){
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

        },
        goUp(){
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

        },





    }
});