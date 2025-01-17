import 'plyr/dist/plyr.css'
import '@/assets/styles/plyr.less'

import Plyr from 'plyr'

const locales = {
  'zh-CN': {
    restart: '重新播放',
    rewind: '倒退 {seektime} 秒',
    play: '播放',
    pause: '暂停',
    fastForward: '快进 {seektime} 秒',
    seekLabel: '{currentTime} / {duration}',
    played: '已播放',
    buffered: '已缓冲',
    currentTime: '当前时间',
    duration: '持续时间',
    volume: '音量',
    mute: '静音',
    unmute: '取消静音',
    enableCaptions: '启用字幕',
    disableCaptions: '禁用字幕',
    download: '下载',
    enterFullscreen: '进入全屏',
    exitFullscreen: '退出全屏',
    captions: '字幕',
    settings: '设置',
    pip: '画中画',
    menuBack: '返回',
    seek: '播放位置',
    speed: '速度',
    normal: '正常',
    quality: '质量',
    loop: '循环',
    start: '开始',
    end: '结束',
    all: '全部',
    reset: '重置',
    disabled: '已禁用',
    enabled: '已启用',
  },
  'en-US': {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
  },
  'ru-RU': {
    restart: "Перезапуск",
    rewind: "Перемотать на {seektime}с",
    play: "Воспроизвести",
    pause: "Пауза",
    fastForward: "Вперёд на {seektime}с",
    seek: "Перемотать",
    seekLabel: "{currentTime} из {duration}",
    played: "Проиграно",
    buffered: "Буферизовано",
    currentTime: "Текущее время",
    duration: "Длительность",
    volume: "Громкость",
    mute: "Выключить звук",
    unmute: "Включить звук",
    enableCaptions: "Включить субтитры",
    disableCaptions: "Выключить субтитры",
    download: "Скачать",
    enterFullscreen: "Полноэкранный режим",
    exitFullscreen: "Выйти из полноэкранного режима",
    frameTitle: "Плеер для {title}",
    captions: "Субтитры",
    settings: "Настройки",
    pip: "Картинка в картинке",
    menuBack: "Вернуться в предыдущее меню",
    speed: "Скорость",
    normal: "Обычная",
    quality: "Качество",
    loop: "Повтор",
    start: "Начало",
    end: "Конец",
    all: "Все",
    reset: "Сброс",
    disabled: "Отключено",
    enabled: "Включено"
  },
}

export const mediaPlayer = (container: HTMLElement) => {
  const { locale } = useI18n()
  return new Plyr(container, {
    i18n: locales[locale.value as keyof typeof locales],
    settings: [],
    tooltips: { controls: true },
    storage: { key: 'umo-editor:player' },
    disableContextMenu: false,
  })
}