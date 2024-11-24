<template>
  <Topbar :title="'Voices'"></Topbar>
  <main class="p-6">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(voice, key) in voices"
        :key="key"
        class="border border-border-100 rounded-xl bg-white-100 p-4"
      >
        <div class="flex justify-between">
          <div class="flex flex-1 items-center gap-4">
            <div
              class="w-[75px] h-[75px] rounded-full overflow-hidden flex bg-opacity-50 items-center justify-center"
              :class="voice.avatar.color"
            >
              <img
                :src="getImagePath(voice.avatar.src)"
                :alt="voice.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-heading-100 leading-none">{{ voice.name }}</h4>
              <span class="text-[15px] font-medium mt-2 mb-1 block">{{ voice.role }}</span>
              <span class="text-[15px] font-medium">{{ voice.phone }}</span>
            </div>
          </div>
          <div class="flex gap-1">
            <button
              v-if="!isPlaying(voice.name)"
              @click="playVoice(voice.name)"
              class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-primary-100 hover:bg-opacity-10 hover:border-primary-100 hover:border-opacity-10 hover:text-primary-100"
              title="Play Voice"
            >
              <play-icon class="w-5 h-5" />
            </button>
            <button
              v-else
              @click="pauseVoice()"
              class="w-[34px] h-[34px] border border-border-100 rounded-md flex items-center justify-center transition-all hover:bg-primary-100 hover:bg-opacity-10 hover:border-primary-100 hover:border-opacity-10 hover:text-primary-100"
              title="Pause Voice"
            >
              <pause-icon class="w-5 h-5" />
            </button>
          </div>
        </div>
        <audio
          :src="getAudioPath(voice.name)"
          class="hidden"
          :id="getAudioId(voice.name)"
          @ended="handleAudioEnd"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Topbar from '@/components/Topbar.vue'
import PlayIcon from '@/components/icons/PlayIcon.vue'
import PauseIcon from '@/components/icons/PauseIcon.vue'
export default {
  components: {
    Topbar,
    PlayIcon,
    PauseIcon,
  },
  data() {
    return {
      currentlyPlaying: null,
      voices: [
        {
          id: 1,
          name: 'Dave',
          role: 'Strong Accent, Australian, Male',
          avatar: {
            src: 'dave.png',
            color: 'bg-success-100',
          },
        },
        {
          id: 2,
          name: 'Jenny',
          role: 'Friendly, American, Female',
          avatar: {
            src: 'jenny.png',
            color: 'bg-primary-100',
          },
        },
        {
          id: 3,
          name: 'Angela',
          role: 'Soft, American, Female',
          avatar: {
            src: 'angela.png',
            color: 'bg-info-100',
          },
        },
        {
          id: 4,
          name: 'Ruth',
          role: 'Strong Accent, Australian, Female',
          avatar: {
            src: 'ruth.png',
            color: 'bg-primary-100',
          },
        },
        {
          id: 5,
          name: 'Danny',
          role: 'Soft, friendly, American, Male',
          avatar: {
            src: 'danny.png',
            color: 'bg-info-100',
          },
        },
        {
          id: 6,
          name: 'Jake',
          role: 'Articulate American Male',
          avatar: {
            src: 'jake.png',
            color: 'bg-warning-100',
          },
        },
        {
          id: 7,
          name: 'Maya',
          role: 'Young, female, American, Chirpy',
          avatar: {
            src: 'maya.png',
            color: 'bg-danger-100',
          },
        },
        {
          id: 8,
          name: 'Dorothy',
          role: 'Strong Accent, British, Female',
          avatar: {
            src: 'dorothy.png',
            color: 'bg-success-100',
          },
        },
      ],
    }
  },
  methods: {
    getAudioId(name) {
      return `audio-${name.toLowerCase()}`
    },

    getImagePath(filename) {
      return `/src/assets/images/${filename}`
    },

    getAudioPath(name) {
      return `/src/assets/audios/${name.toLowerCase()}.mpga`
    },

    isPlaying(name) {
      return this.currentlyPlaying === name.toLowerCase()
    },

    playVoice(name) {
      document.querySelectorAll('audio').forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })

      const audioId = this.getAudioId(name)
      const audioElement = document.getElementById(audioId)

      if (audioElement) {
        audioElement.play().catch((error) => {
          console.error('Error playing audio:', error)
        })
        this.currentlyPlaying = name.toLowerCase()
      }
    },

    pauseVoice() {
      document.querySelectorAll('audio').forEach((audio) => {
        audio.pause()
        audio.currentTime = 0
      })
      this.currentlyPlaying = null
    },

    handleAudioEnd() {
      this.currentlyPlaying = null
    },
  },
}
</script>
