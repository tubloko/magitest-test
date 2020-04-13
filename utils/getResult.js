module.exports = {
    async getResult(selected, questions) {
        let result = [];

        const varies = questions.questions.map(a => a.options.map(a => a));

        varies.forEach((a, i) => {
            const correct = a.filter(corr => corr.correct)[0];
            if (selected[i].match(correct._id)) {
                result.push(true);
            }
            else result.push(false);
        });

        return result;
    }
};