function createForumLink(forum) {
    return `<a href="forum.html?uuid=${forum.uuid}">${forum.name} - ${forum.topics} topics</a>`;
}

function createTopicLink(topic) {
    return `<a href="topic.html?uuid=${topic.uuid}">${topic.title}</a>`;
}

function createForumLi(forum) {
    const li = document.createElement("li");
    li.innerHTML = createForumLink(forum);
    return li;
}

function createTopicLi(topic) {
    const li = document.createElement("li");
    const html = `${createTopicLink(topic)}<span>Posted by ${topic.author.username} on ${topic.postDate.toLocaleString()} - ${topic.replies.length} replies</span>`;
    li.innerHTML = html;
    return li;
}

function getForumParents(forum) {
    const parents = [];
    if (forum.parent === null) {
        return null;
    }

    parents.push(forum.parent);
    const innerParent = getForumParents(forum.parent);
    if (innerParent !== null) {
        parents.push(...innerParent);
    }

    return parents;
}

function createForumName(forum) {
    let parents = getForumParents(forum);
    
    let html = `${forum.name}`;

    if (parents !== null) {
        html = `${parents.reverse().map(p => `<span>${createForumLink(p)} &gt;</span>`).join(" ")} ` + html;
    }

    return `Forum - ${html}`;
}

function createReply(reply) {
    const li = document.createElement("li");
    li.innerHTML = `<p>Posted by ${reply.author.username} on <time>${reply.postDate.toLocaleString()}</time></p><hr><div>${reply.content}</div>`;
    return li;
}

document.querySelector("#current-user").textContent = getUser(CURRENT_USER_UUID).username;

const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset DB";
resetBtn.onclick = function () {
    delete localStorage.db;
    window.location.href = "/";
}
document.body.append(resetBtn);