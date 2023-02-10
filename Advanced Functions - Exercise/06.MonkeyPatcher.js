function monkeyPatch(action) {
    const actions = {
        upvote: () => {
            let current = this.upvotes;
            current++;
            this.upvotes = current;
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
        let balance = up - down;
        let currentRaiting = "";

        if ((up / (up + down) > 0.66) && (balance >= 0) && (total >= 10)) {
            currentRaiting = raitings.hot;
        } else if ((balance >= 0) && (total > 100)) {
            currentRaiting = raitings.controversial;
        } else if (balance < 0 && total >= 10) {
            currentRaiting = raitings.unpopular;
        } else {
            currentRaiting = raitings.new;
        }

        return {
            balance,
            currentRaiting
        }
    }

    return actions[action]();
}