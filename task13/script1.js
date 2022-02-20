class StateMachine {

    state = []

    add(cb, seconds) {

        this.cb = cb
        this.seconds = seconds * 1000
        this.state.push({cb: this.cb, seconds: this.seconds})
        console.log(this)
        return this
    }

    run() {

        for (let i = 0; i < this.state.length; i++) {

            this.timer = setTimeout(this.state[i].cb, this.state[i].seconds)
            this.state[i].timer = this.timer
        }
    }

    stopAll() {

        for (let i = 0; i < this.state.length; i++) {

            clearTimeout(this.state[i].timer)
        }
    }
}

const stateMachine = new StateMachine()

stateMachine

    .add(() => {console.log('Приветствую вас через секунду')}, 1)

    .add(() => {console.log('Приветствую вас через две секунды'); stateMachine.stopAll()}, 2)

    .add(() => {console.log('Это не должно вызваться никогда!')}, 3)
        
stateMachine.run()


  