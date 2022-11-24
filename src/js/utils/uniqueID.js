const uniqueID = function () {
    if (uniqueID.last === undefined) uniqueID.last = 0;
    uniqueID.last++;
    localStorage.setItem('uid', uniqueID.last);
    return (function () {
        return Number(localStorage.getItem('uid'));
    })();
};


export default uniqueID;