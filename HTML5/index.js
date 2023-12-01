function rr() {
    var operation = document.getElementById("operations");
    operation.innerHTML = "";
    var br = document.createElement("br");
    p.sort(function (a, b) {
        return a.at - b.at;
    });
    gantt = [];
    t = 0;
    var q = [];
    var done = 0, count = 0;
    var i = 0;
    while (p[i].at == 0) {
        q.push(i);
        i++;
    }
    while (done != 1) {
        var k = q.shift();
        if (k == undefined) {
            var t1 = t;
            for (i = 0; i < p.length; i++) {
                if (p[i].valid == 0)
                    break;
            }
            t = p[i].at;
            var newdiv = document.createElement("div");
            newdiv.setAttribute("style", "text-align: center; margin: auto; width:100%; font-size: 20px;");
            newdiv.textContent = "t = " + t1 + ": CPU is idle.";
            operation.appendChild(br);
            operation.appendChild(newdiv);
            operation.appendChild(br);
            gantt.push({
                "id": -1,
                "start": t1,
                "end": t
            });
            for (i = 0; i < p.length; i++) {
                if (p[i].at == t) {
                    q.push(i);
                }
            }
        }
        else {
            var newdiv = document.createElement("div");
            newdiv.setAttribute("style", "text-align: center; margin: auto; width:100%; font-size: 20px;");
            newdiv.textContent = "t = " + t + ": Process-" + p[k].id + " entered CPU and being executed";
            operation.appendChild(br);
            operation.appendChild(newdiv);
            operation.appendChild(br);
            if (p[k].rt <= quantum) {
                p[k].valid = 1;
                count += 1;
                p[k].ct = t + p[k].rt;
                p[k].tat = p[k].ct - p[k].at;
                p[k].wt = p[k].tat - p[k].bt;
                p[k].rt = 0;
                gantt.push({
                    "id": p[k].id,
                    "start": t,
                    "end": p[k].ct
                });
                t = p[k].ct;
            }
            else {
                p[k].rt -= quantum;
                gantt.push({
                    "id": p[k].id,
                    "start": t,
                    "end": t+quantum
                });
                t += quantum;
            }
            for (i = 0; i < p.length; i++) {
                if (p[i].at > t - quantum && p[i].at <= t)
                    q.push(i);
            }
            if (p[k].rt > 0) {
                q.push(k);
            }
        }
        if (count == p.length) done = 1;
    }
    //calculations
    var total_tat = 0.0, total_wt = 0.0;
    for (var i = 0; i < p.length; i++) {
        total_tat += p[i].tat;
        total_wt += p[i].wt;
    }
    atat = (total_tat / p.length).toFixed(2);
    awt = (total_wt / p.length).toFixed(2);
}
