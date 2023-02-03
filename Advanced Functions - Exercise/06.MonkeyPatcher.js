function monkeyPatch(action) {
    const actions = {
        upvote: () => {
            this.upvotes++
        },
        downvote: () => {
            let current = this.downvotes;
            current++;
            this.downvotes = current;
        },
        score: () => {
            let { reportedUp, reportedDown } = getReportedAmount(this.upvotes, this.downvotes);
            let { balance, currentRaiting } = getRaiting(this.upvotes, this.downvotes)
            let result = [reportedUp, reportedDown, balance, currentRaiting];
            return result
        }
    }


    function getReportedAmount(up, down) {

        let actualUp = Number(up);
        let actualDown = Number(down);
        let reportedUp = actualUp;
        let reportedDown = actualDown;



        let obfuscated = false;

        if (actualUp + actualDown > 50) {
            obfuscated = true;
        }

        if (obfuscated) {
            let numberToAdd = Math.ceil((Math.max(actualUp, actualDown) * 0.25))
            reportedUp += numberToAdd;
            reportedDown += numberToAdd;
        }

        return {
            reportedUp,
            reportedDown
        }

    }

    function getRaiting(up, down) {
        up = Number(up);
        down = Number(down);
        let raitings = {
            new: "new",
            hot: "hot",
            controversial: "controversial",
            unpopular: "unpopular",
        }

        let total = up + down;
        let obfuscated = Math.ceil(0.25 * Math.max(up, down));
        let obfuscatedUpVotes = up + down;
        let obfuscatedDownVotes = up + down;
        let balance = obfuscatedUpVotes - obfuscatedDownVotes;
        let currentRaiting = "";



        if (total < 10) {
            currentRaiting = raitings.new;
        } else if (up > total * 0.66) {
            currentRaiting = raitings.hot;
        } else if (balance >= 0 && (up > 100 || down > 100)) {
            currentRaiting = raitings.controversial;
        } else if (balance < 0) {
            currentRaiting = raitings.unpopular;
        } else {
            currentRaiting = raitings.new;
        }

        // if ((up / (up + down) > 0.66) && (balance >= 0) && (total >= 10)) {
        //     currentRaiting = raitings.hot;
        // } else if ((balance >= 0) && (total > 100)) {
        //     currentRaiting = raitings.controversial;
        // } else if (balance < 0) {
        //     currentRaiting = raitings.unpopular;
        // } else {
        //     currentRaiting = raitings.new;
        // }

        return {
            balance,
            currentRaiting
        }
    }

    return actions[action]();
}

let post = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

monkeyPatch.call(post, "upvote")
console.log(monkeyPatch.call(post, "score"));


