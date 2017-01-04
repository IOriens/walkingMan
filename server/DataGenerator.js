class DataGenerator {
  constructor (initData) {
    this.totalStep = initData ? ['totalStep'] : 0 // 总步数
    this.step = 0 // 10s内步数
    this.pulse = 70 // 10s内平均脉搏
    // 20步1卡
    this.totoalEnergyConsumption = initData ? initData['totoalEnergyConsumption'] : 0
    this.energyConsumption = 0 // 10s内能量消耗

    this.stepRange = [0, 30]
    this.pulseRange = [60, 120]
  }

  generateData () {
    this.step = Math.floor(Math.random() * this.stepRange[1])
    this.totalStep += this.step
    // this.pulse = this.pulseRange[0] + Math.floor(Math.random() * (this.stepRange[1] - this.stepRange[0]))
    this.pulse = this.pulseRange[0] + this.step / this.stepRange[1] * (this.pulseRange[1] - this.pulseRange[0])
    this.energyConsumption = this.step / 20
    this.totoalEnergyConsumption += this.energyConsumption

    const returnData = {
      'step': this.step,
      'totalStep': this.totalStep,
      'energyConsumption': this.energyConsumption,
      'totoalEnergyConsumption': this.totoalEnergyConsumption,
      'pulse': this.pulse
    }
    console.log(returnData)

    return returnData
  }
}

export default DataGenerator
