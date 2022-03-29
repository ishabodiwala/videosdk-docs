---
sidebar_position: 1
sidebar_label: Methods
pagination_label: Methods returned by useParticipant Hook
title: Methods returned by useParticipant Hook
---

<div class="sdk-api-ref-only-h4">

### enableMic()

- `enableMic()` is used to enable mic of the local participant.

#### Events associated with `enableMic()`:

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableMic()

- `disableMic()` is used to disable mic of the local participant.

#### Events associated with `disableMic()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### enableWebcam()

- `enableWebcam()` is used to enable webcam of the local participant.

#### Events associated with `enableWebcam()`:

- Every Participant will receive a callback on [`onStreamEnabled()`](./events#onstreamenabled) of the `useParticipant()` hook with `Stream` object.

---

### disableWebcam()

- `disableWebcam()` is used to disable webcam of the local participant.

#### Events associated with `disableWebcam()`:

- Every Participant will receive a callback on [`onStreamDisabled()`](./events#onstreamdisabled) of the `useParticipant()` hook with `Stream` object.

---

### setQuality()

- `setQuality()` is used to set the quality of participants video.

#### Parameter

- **quality** : _"low"_ | _"med"_ | _"high"_

---

### pin()

- `pin()` is used to pin a participant in the meeting.

#### Parameter

- **type** : _"SHARE_AND_CAM"_ | _"CAM"_ | _"SHARE"_ | null

#### Events associated with `pin()`:

- Every Participant will get an event callback on [`onPinStateChanged()`](../use-meeting/events#onpinstatechanged) of `useMeeting` hook.

---

### unPin()

- `unPin()` is used to unpin a participant in the meeting.

#### Parameter

- **type** : _"SHARE_AND_CAM"_ | _"CAM"_ | _"SHARE"_ | null

#### Events associated with `unPin()`:

- Every Participant will get an event callback on [`onPinStateChanged()`](../use-meeting/events#onpinstatechanged) of `useMeeting` hook.

---

### switchTo()

- If you want a participant from a connected meeting to be switched from one meeting to another meeting, `switchTo()` method is used. This method accept `meetingId`, `token` and `payload` as an object.

  - `meetingId` - This should be the `meetingId` where you want to switch that participant from the joined meeting.

#### Events associated with `switchTo()`:

- [`onSwitchMeeting()`](../use-meeting/events#onswitchmeeting) event will be triggered for the participant who will switching the meeting.

#### Example

**Meeting_A** is connected with **Meeting_B**, there are participants `P1` in **Meeting_A** and `P2` in **Meeting_B**, now **Meeting_A** participant `P1` wants to switch `P2` participant from **Meeting_B** to **Meeting_A**, then participant `P1` will call:

`connectionParticipant.switchTo({ meetingId, token, payload })`

after that `P2` from **Meeting_B** will receive an event `onSwitchMeeting()`.

```js
// Get meeting B connection
const { connection } = useConnection("<meeting-B-id>");

// Get participant of meeting B
const connectionParticipant =
  connection.meeting.participants.get("<participant-id>");

// Here participant from meeting A requests to switch particpant from meeting B to A
const onClick = () => {
  const meetingId = "<meeting-A-id>";
  const token = "JWT";
  const payload = "payload";

  connectionParticipant.switchTo({ meetingId, token, payload });
};

useMeeting({
  onSwitchMeeting: ({
    meetingId,
    payload,
    token,
    connectionParticipantId,
    connectionMeetingId,
  }) => {
    // Resetting token and meetingId at participant side
    setToken(token);
    setMeetingId(meetingId);
  },
});
```

</div>