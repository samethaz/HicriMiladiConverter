function MiladiDateConvert(MiladiDate){
    return (MiladiDate-Math.round(MiladiDate/33))+622+1;}

    module.exports = {
        Miladi : MiladiDateConvert
    }