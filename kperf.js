/**
 * Created with JetBrains PhpStorm.
 * User: voice
 * Date: 17.03.13
 * Time: 22:47
 * To change this template use File | Settings | File Templates.
 */
function returnOne(){
    return 1;

}

describe("returnOne", function() {
    it("WoW", function() {
        expect(returnOne(0)).toBe(1);
    });

});