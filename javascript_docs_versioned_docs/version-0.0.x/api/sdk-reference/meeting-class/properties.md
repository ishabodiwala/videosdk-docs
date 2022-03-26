---
sidebar_position: 1
sidebar_label: Properties
pagination_label: Meeting Class Properties
title: Meeting Class Properties
---

<div class="sdk-api-ref">

### id

- type: `String`

- Unique id of the meeting where the participant has joined.

---

### activeSpeakerId

- type: `String`

- It will be the `id` of the participant who is actively speaking in the meeting. If no participant is speaking, at that time value of `activeSpeakerId` will be `null`.

---

### activePresenterId

- type: `String`

- It will be the `id` of the participant who started `Presenting` / `Screen sharing` in the meeting. If no participant is sharing the screen, at that time value of `activePresenterId` will be `null`.

---

### mainParticipantId

- type: `String`

- It will be the `id` of the participant who is th emain speaker of the meeting, it will change according to `activePresenterId` and `activePresenterId`.

- If you want to display only one participnat webcam video or screen share video, then this property can be used at that time.

---

### localParticipant

- type: [Participant](./)

- It will the instance of [Participant](./) class for the local participant who joined the meeting.

---

### participants

- type: [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) of [Participant](./)

- `Map<String, Participant>`

  - Map<`participantId`, [Participant](./)>

- It will contain all joined participants in the meeting except the `localParticipant`.

- This will be the [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) what will container all participants attached with the key as id of that participant.

```javascript
const remoteParticipantId = "ajf897";

const remoteParticipant = patricipants.get(remoteParticipantId);
```

---

### pubSub

---

### pinnedParticipants

</div>