function getDbFromLocalStorage() {
    if (localStorage.getItem("db") === null) {
        createLocalDb();
    }
    return JSON.parse(localStorage.getItem("db"));
}

function createLocalDb() {
    localStorage.setItem("db", JSON.stringify({
        forums: [
            {
                "uuid": "380622be-2ea8-4f72-8f92-d5c1852d57fc",
                name: "General Discussion",
                parentUuid: null
            },
            {
              "uuid": "2c36c622-84cc-42c9-96b3-2bfcce29a7c9",
              "name": "Action Games",
              "parentUuid": null
            },
            {
              "uuid": "05a22d45-68f2-4c05-b73d-77a31e490a6f",
              "name": "First-Person Shooters",
              "parentUuid": "2c36c622-84cc-42c9-96b3-2bfcce29a7c9"
            },
            {
              "uuid": "c16d652e-0b05-4c6f-b6e9-2c20ca36efc1",
              "name": "Call of Duty",
              "parentUuid": "05a22d45-68f2-4c05-b73d-77a31e490a6f"
            },
            {
              "uuid": "4b1e76f5-8d62-4e49-9c3b-5d15ea73309b",
              "name": "Battlefield",
              "parentUuid": "05a22d45-68f2-4c05-b73d-77a31e490a6f"
            },
            {
              "uuid": "fc413b61-236a-47b2-9e77-50a5ac4b5a82",
              "name": "Halo",
              "parentUuid": "05a22d45-68f2-4c05-b73d-77a31e490a6f"
            },
            {
              "uuid": "5c0a97de-2b82-45aa-9877-67c3ef4f7d3b",
              "name": "Hack and Slash",
              "parentUuid": "2c36c622-84cc-42c9-96b3-2bfcce29a7c9"
            },
            {
              "uuid": "f7f0b2d7-aa45-4ec1-98d9-4aa7126ea74c",
              "name": "Diablo",
              "parentUuid": "5c0a97de-2b82-45aa-9877-67c3ef4f7d3b"
            },
            {
              "uuid": "127d05c9-56f0-4909-b54d-67618e50913c",
              "name": "Devil May Cry",
              "parentUuid": "5c0a97de-2b82-45aa-9877-67c3ef4f7d3b"
            },
            {
              "uuid": "f89e9644-3f0a-4a3b-9c47-0c83a3f22dc4",
              "name": "Bayonetta",
              "parentUuid": "5c0a97de-2b82-45aa-9877-67c3ef4f7d3b"
            },
            {
              "uuid": "c77d004a-5a50-437a-84b2-4ab2924a54bf",
              "name": "Role-Playing Games",
              "parentUuid": null
            },
            {
              "uuid": "4e25e18d-17a3-42dd-986c-0e4c5ad36db2",
              "name": "Western RPGs",
              "parentUuid": "c77d004a-5a50-437a-84b2-4ab2924a54bf"
            },
            {
              "uuid": "a8e0bc52-1521-4e79-8a54-4d3d6fcce87b",
              "name": "The Elder Scrolls",
              "parentUuid": "4e25e18d-17a3-42dd-986c-0e4c5ad36db2"
            },
            {
              "uuid": "1b907f26-6939-40ad-bc57-1d6e96ecb8b1",
              "name": "Fallout",
              "parentUuid": "4e25e18d-17a3-42dd-986c-0e4c5ad36db2"
            },
            {
              "uuid": "81a58f18-1bf3-4ca3-8f6a-38e93dd7d1a7",
              "name": "Mass Effect",
              "parentUuid": "4e25e18d-17a3-42dd-986c-0e4c5ad36db2"
            },
            {
              "uuid": "cd3f10e2-3ef9-4a63-b4c1-7b693132bb06",
              "name": "Japanese RPGs",
              "parentUuid": "c77d004a-5a50-437a-84b2-4ab2924a54bf"
            },
            {
              "uuid": "e5702ef4-5ec4-46f5-994d-561cc9dbb50a",
              "name": "Final Fantasy",
              "parentUuid": "cd3f10e2-3ef9-4a63-b4c1-7b693132bb06"
            },
            {
              "uuid": "c9ed9c9c-2e98-4d03-ae56-4c019d2d07d1",
              "name": "Dragon Quest",
              "parentUuid": "cd3f10e2-3ef9-4a63-b4c1-7b693132bb06"
            },
            {
              "uuid": "4e58d4c7-2dbf-40c0-8a45-3a1ed12c4f2d",
              "name": "Persona",
              "parentUuid": "cd3f10e2-3ef9-4a63-b4c1-7b693132bb06"
            }
          ],          
    
        topics: [
          {
            "uuid": "297afced-e4a8-46d6-b29c-1540ff3665c1",
            "title": "Just a little bit of chit-chat",
            "postDate": "2023-11-06T21:05:53.035Z",
            "authorUuid": "0d1edab4-580f-404f-86ab-2e3594c61599",
            "forumUuid": "380622be-2ea8-4f72-8f92-d5c1852d57fc"
          }
        ],
    
        replies: [
          {
            "uuid": "f07d27e3-9c8d-431b-a4c0-1617e8d41de1",
            "content": "Hello, everyone! How's it going today?",
            "postDate": "2023-11-07T10:15:00.000Z",
            "authorUuid": "0d1edab4-580f-404f-86ab-2e3594c61599",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "ca451f99-90e2-45e4-8e5f-8e37a42ab208",
            "content": "I'm doing well, thanks. How about you, User 3?",
            "postDate": "2023-11-07T10:17:30.000Z",
            "authorUuid": "ec4a153d-2f61-4f27-bb37-925fa7462aae",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "ab16b5da-13d6-4e8b-b498-899f3c5c08c6",
            "content": "I'm good! Just working on some projects.",
            "postDate": "2023-11-07T10:20:15.000Z",
            "authorUuid": "a4b6351c-7d8a-4960-b1d9-00ae0f11a787",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "f0b84b76-6d08-4ddc-9e09-4e6ab8e6c3c2",
            "content": "My day is going pretty well. How's your day going?",
            "postDate": "2023-11-07T10:23:45.000Z",
            "authorUuid": "39e1085b-6467-4dbf-8ee9-8f87ea13de8f",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "d7efbda4-827f-4d94-b184-19635b5b6fb5",
            "content": "I'm having a busy day, but it's all good.",
            "postDate": "2023-11-07T10:26:30.000Z",
            "authorUuid": "71c3c08c-09e0-4f56-ba2f-658555bd2b02",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "cd48f08b-21e0-4d85-9d03-5c1f2d181e11",
            "content": "My day is going quite smoothly.",
            "postDate": "2023-11-07T10:29:15.000Z",
            "authorUuid": "8dd15824-2ff1-46ea-a93c-20d127cd599e",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "e2ca9077-83b3-4c4e-97b2-161438f58652",
            "content": "I'm just preparing for a meeting.",
            "postDate": "2023-11-07T10:32:00.000Z",
            "authorUuid": "fba98a69-6c0c-4f13-9f74-764bc8cddc3a",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "d32c7ac5-53b6-4f5c-8e72-8a31a9355f63",
            "content": "I'm working on a new project.",
            "postDate": "2023-11-07T10:35:45.000Z",
            "authorUuid": "6a77424a-6d4e-4d2f-9c1f-6671e928ac10",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "b26242a9-5ce0-4d0b-822f-20e3a8665d44",
            "content": "I'm diving into some research right now.",
            "postDate": "2023-11-07T10:38:30.000Z",
            "authorUuid": "8f5a287f-abc7-4366-9bba-43ea448487c2",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          },
          {
            "uuid": "b567d50a-3c80-4ca0-9a49-9c3e54c09b4e",
            "content": "I'm having a productive day, thanks.",
            "postDate": "2023-11-07T10:41:15.000Z",
            "authorUuid": "b5830e3a-0e6b-4ac6-8a23-6a0cda2054f7",
            "topicUuid": "297afced-e4a8-46d6-b29c-1540ff3665c1"
          }
        ],

        users: [
            { "uuid": "0d1edab4-580f-404f-86ab-2e3594c61599", "username": "BlueDragon" },
            { "uuid": "ec4a153d-2f61-4f27-bb37-925fa7462aae", "username": "SilverFox" },
            { "uuid": "a4b6351c-7d8a-4960-b1d9-00ae0f11a787", "username": "GoldenUnicorn" },
            { "uuid": "39e1085b-6467-4dbf-8ee9-8f87ea13de8f", "username": "RedPanda" },
            { "uuid": "71c3c08c-09e0-4f56-ba2f-658555bd2b02", "username": "GreenHawk" },
            { "uuid": "8dd15824-2ff1-46ea-a93c-20d127cd599e", "username": "PurplePhoenix" },
            { "uuid": "fba98a69-6c0c-4f13-9f74-764bc8cddc3a", "username": "CrimsonEagle" },
            { "uuid": "6a77424a-6d4e-4d2f-9c1f-6671e928ac10", "username": "YellowLion" },
            { "uuid": "8f5a287f-abc7-4366-9bba-43ea448487c2", "username": "AquaTiger" },
            { "uuid": "b5830e3a-0e6b-4ac6-8a23-6a0cda2054f7", "username": "DiamondBear" }
          ]
          
    }));
}

function saveDb() {
    localStorage.setItem("db", JSON.stringify(db));
}

const db = getDbFromLocalStorage();

function findForum(uuid) {
    return db.forums.find((forum) => forum.uuid === uuid);
}

function findTopic(uuid) {
    return db.topics.find((topic) => topic.uuid === uuid);
}

function findTopicsFromForum(forumUuid) {
    return db.topics.filter((topic) => topic.forumUuid === forumUuid);
}

function findRepliesFromTopic(topicUuid) {
    return db.replies.filter((reply) => reply.topicUuid === topicUuid);
}

function createForumObject(forum) {
    return {
        uuid: forum.uuid,
        name: forum.name,
        parent: forum.parentUuid === null ? null : (
            createForumObject(findForum(forum.parentUuid))
        ),
        topics: findTopicsFromForum(forum.uuid).length
    };
}

function createTopicObject(topic) {
    return {
        uuid: topic.uuid,
        title: topic.title,
        postDate: new Date(topic.postDate),
        author: getUser(topic.authorUuid),
        forum: createForumObject(findForum(topic.forumUuid)),
        replies: findRepliesFromTopic(topic.uuid)
    };
}

function createReplyObject(reply) {
    return {
        uuid: reply.uuid,
        content: reply.content,
        postDate: new Date(reply.postDate),
        author: getUser(reply.authorUuid),
        topic: createTopicObject(findTopic(reply.topicUuid))
    };
}

function getForum(uuid) {
    return createForumObject(findForum(uuid));
}

function getForums(parentUuid=null) {
    const matches = db.forums.filter((forum) => forum.parentUuid === parentUuid);
    return matches.map(m => createForumObject(m));
}

function getTopic(uuid) {
    return createTopicObject(findTopic(uuid));
}

function getTopicsFromForum(forumUuid) {
    const matches = findTopicsFromForum(forumUuid);
    return matches.map(m => createTopicObject(m));
}

function getUser(uuid) {
    return db.users.find((user) => user.uuid === uuid);
}

function getRepliesFromTopic(topicUuid) {
    const matches = findRepliesFromTopic(topicUuid);
    return matches.map(m => createReplyObject(m));
}

function addTopicToForum(title, authorUuid, forumUuid) {
    const topic = {
        uuid: crypto.randomUUID(),
        title,
        postDate: new Date().toISOString(),
        authorUuid,
        forumUuid
    };

    db.topics.push(topic);
    saveDb();
    return createTopicObject(topic);
}

function addReplyToTopic(content, authorUuid, topicUuid) {
    const reply = {
        uuid: crypto.randomUUID(),
        content: content,
        postDate: new Date().toISOString(),
        authorUuid,
        topicUuid
    };

    db.replies.push(reply);
    saveDb();
    return createReplyObject(reply);
}

const CURRENT_USER_UUID = "0d1edab4-580f-404f-86ab-2e3594c61599";
