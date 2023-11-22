const {WebClient} = require('@slack/web-api');

class SlackService {

    async _sliceIntoChunks(arr, chunkSize) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    declination(number) {
        let titles = ['тест', 'теста', 'тестов'];
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }
}

module.exports = (function () {
    return new SlackService();
})();

