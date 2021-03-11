function HicriDateConvert(HicriDate){
    return (HicriDate-Math.round(HicriDate/33))-622-1;
}

    module.exports = {
        Hicri : HicriDateConvert
    }