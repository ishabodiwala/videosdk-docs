---
sidebar_position: 1
sidebar_label: Introduction
pagination_label: Intro to Video SDK Meeting Class
title: Video SDK Meeting Class
---

<div id="tailwind" class="sdk-api-ref">

## Introduction

The `Meeting` class includes properties, methods and events for managing a meeting, participants, video, audio and share streams, messaging and UI customisation.

import LinksGrid from '../../../../../src/theme/LinksGrid'
import properties from '../data/properties.json'
import methods from '../data/methods.json'
import events from '../data/events.json'

## Meeting Properties

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [id](./properties.md#id)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activeSpeakerId](./properties.md#activespeakerid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [activePresenterId](./properties.md#activepresenterid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [selectedWebcamId](./properties.md#selectedwebcamid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [selectedMicId](./properties.md#selectedmicid)

</div>
<div class="col col--4 margin-bottom--lg" >

- [localParticipant](./properties.md#localparticipant)

</div>
<div class="col col--4 margin-bottom--lg" >

- [participants](./properties.md#participants)

</div>
<div class="col col--4 margin-bottom--lg" >

- [PubSub](./properties.md#pubsub)

</div>

</div>

## Meeting Methods

<div class="row">
<div class="col col--4 margin-bottom--lg" >

- [join](./methods#join)

</div>
<div class="col col--4 margin-bottom--lg" >

- [leave](./methods#leave)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableWebcam](./methods#enablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableWebcam](./methods#disablewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [unmuteMic](./methods#unmutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [muteMic](./methods#mutemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [enableScreenShare](./methods#enablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [disableScreenShare](./methods#disablescreenshare)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startRecording](./methods#startrecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopRecording](./methods#stoprecording)

</div>
<div class="col col--4 margin-bottom--lg" >

- [startLivestream](./methods#startlivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [stopLivestream](./methods#stoplivestream)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getWebcams](./methods#getwebcams)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeWebcam](./methods#changewebcam)

</div>
<div class="col col--4 margin-bottom--lg" >

- [getMics](./methods#getmics)

</div>
<div class="col col--4 margin-bottom--lg" >

- [changeMic](./methods#changemic)

</div>
<div class="col col--4 margin-bottom--lg" >

- [on](./methods#on)

</div>
</div>

## Meeting Events

<div class="row">

<div class="col col--4 margin-bottom--lg" >

- [MeetingJoined](./events.md#meetingjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [MeetingLeft](./events.md#meetingleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [ParticipantJoined](./events.md#participantjoined)

</div>
<div class="col col--4 margin-bottom--lg" >

- [ParticipantLeft](./events.md#participantleft)

</div>
<div class="col col--4 margin-bottom--lg" >

- [SpeakerChanged](./events.md#speakerchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [PresenterChanged](./events.md#presenterchanged)

</div>
<div class="col col--4 margin-bottom--lg" >

- [EntryRequested](./events.md#entryrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [EntryResponded](./events.md#entryresponded)

</div>
<div class="col col--4 margin-bottom--lg" >

- [WebcamRequested](./events.md#webcamrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [MicRequested](./events.md#micrequested)

</div>
<div class="col col--4 margin-bottom--lg" >

- [RecordingStarted](./events.md#recordingstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [RecordingStopped](./events.md#recordingstopped)

</div>
<div class="col col--4 margin-bottom--lg" >

- [LivestreamStarted](./events.md#livestreamstarted)

</div>
<div class="col col--4 margin-bottom--lg" >

- [LivestreamStopped](./events.md#livestreamstopped)

</div>

</div>

</div>