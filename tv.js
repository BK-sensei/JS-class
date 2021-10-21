// EXERCICE 2 - TV

class TV {
    constructor(brand, channel, volume){
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    increase(volumeUp){
        this.volume = this.volume + volumeUp
        if (this.volume >= 100){
            this.volume = 100
        }
    }

    decrease(volumeDown){
        this.volume = this.volume - volumeDown
        if (this.volume <= 0){
            this.volume = 0
        }
    }

    change(switchChannel){
        this.channel = this.channel + switchChannel 
        if(this.channel > 50){
            // this.channel = 50
            this.channel = this.channel - switchChannel
        } else if (this.channel < 0){
            // this.channel = 0
            this.channel = this.channel - switchChannel
        }
    }

    reset(){
        this.channel = 1
        this.volume = 50
    }

    describe(string){
        console.log(`The TV from ${this.brand} has her volume at ${this.volume}, and we are watching the channel ${this.channel}`)
    }
}

let AppleTv = new TV ("Apple", 1, 50)
    AppleTv.decrease(60)
    AppleTv.increase(60)
    AppleTv.change(12)
    AppleTv.change(5)
    AppleTv.change(-10)
    AppleTv.change(5)
    AppleTv.change(-15)
    console.log(AppleTv)
    AppleTv.reset()
    AppleTv.describe(`The TV from ${AppleTv.brand} has her volume at ${AppleTv.volume}, and we are watching the channel ${AppleTv.channel}`)
    

