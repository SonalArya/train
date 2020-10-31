class Coal{
    constructor(){

    }

    getCount() {
        var coalCountRef = database.ref('coalCount');
        coalCountRef.on("value", (data) => {
            coalCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            coalCount: count
        });
    }
}