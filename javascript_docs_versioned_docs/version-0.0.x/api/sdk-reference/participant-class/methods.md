---
title: Participant Class Methods
sidebar_position: 1
sidebar_label: Methods
pagination_label: Participant Class Methods
---

<div class="sdk-api-ref-only-h4">

### enableWebcam()

- `enableWebcam()` is used to enable self camera.

#### Events associated with `enableWebcam()` :

- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

#### Returns

- `void`

---

### disableWebcam()

- `disableWebcam()` is used to disable self camera.

#### Events associated with `disableWebcam()` :

- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

#### Returns

- `void`

---

### enableMic()

- `enableMic()` is used to enable self microphone.

#### Events associated with `enableMic()` :

- Local Participant and Remote Participant will receive a `Events.streamDisabled` event with `stream` object.

#### Returns

- `void`

---

### disableMic()

- `disableMic()` is used to disable self microphone.

#### Events associated with `disableMic()`:

- Local Participant and Remote Participant will receive a `Events.streamEnabled` event with `stream` object.

#### Returns

- `void`

---

### setQuality()

- `setQuality()` is used to set the quality of the participant's video stream.

#### Parameters

- `quality`: low | med | high

#### Returns

- `void`

---

### pin()

- `pin()` is used to pin the participant.

#### Events associated with `pin()` :

- Local Participant and Remote Participant will receive an `Events.pin-state-changed` event with `meeting` object.

#### Parameters

- `type` : SHARE_AND_CAM | CAM | SHARE | null

#### Returns

- `void`

---

### unpin()

- `unpin()` is used to pin the participant.

#### Events associated with `unpin()` :

- Local Participant and Remote Participant will receive an `Events.pin-state-changed` event with `meeting` object.

#### Parameters

- `type` : SHARE_AND_CAM | CAM | SHARE | null

#### Returns

- `void`

</div>