const uniqueID = function () {
    if (uniqueID.last === undefined) uniqueID.last = 0;
    uniqueID.last++;
    return (function () {
        return uniqueID.last;
    })();
};


export default uniqueID;