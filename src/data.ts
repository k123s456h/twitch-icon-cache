import { StreamerData } from "./@types/interfaces"

const TYPE = {
  /**
   * {"dccons": [{
   * 
   *  path: string, // 상대경로, 절대경로 체크 해야 함.
   * 
   *  keywords: string[],
   * 
   *  tags: string[],
   * 
   * }]}
   * 
   * https://open-dccon-selector.update.sh/api/dccon-url?channel_name=
   * 를 통헤서 얻을 수 있음.
   */
  openDccon: 0,

  /**
   * dcConsData = [{
   * 
   *  name: string,
   * 
   *  keywords: string[],
   * 
   *  tags: string[],
   * 
   *  // 옵션임.
   *  // 없다면 example.com/images/name 또는 example.com/images/dccon/name
   *  uri?: string, 
   * 
   * }]
   */
  BridgeBBCC: 1,
}


/**
 * 서버 관리자가 설정해야 할 내용.
 * 추후 규모가 커진다면 스트리머가 직접 설정하도록 오픈할 예정임.
 **/
export const STREAMER_DATA: StreamerData[] = [
  {
    "name": "funzinnu",
    "id": 49469880,
    "url": "https://api.probius.dev/twitch-icons/cdn/list/open-dccon/funzinnu", // image collision exists: 케이크가게, 쿠기가게
    "imagePrefix": "https://api.probius.dev/twitch-icons/cdn/",
    "type": TYPE.openDccon,
    "nickname": "펀즈",
  },
  {
    "name": "yeokka",
    "id": 124535126,
    "url": "https://api.probius.dev/twitch-icons/cdn/list/open-dccon/yeokka",
    "imagePrefix": "https://api.probius.dev/twitch-icons/cdn/",
    "type": TYPE.openDccon,
    "nickname": "여까",
  },
  {
    "name": "telk5093",
    "id": 106620687,
    "url": "https://api.probius.dev/twitch-icons/cdn/list/open-dccon/telk5093", // image collision exists: 북한앵무
    "imagePrefix": "https://api.probius.dev/twitch-icons/cdn/",
    "type": TYPE.openDccon,
    "nickname": "텔크",
  },
  {
    "name": "sleeping_ce",
    "id": 414759894,
    "url": "https://api.probius.dev/twitch-icons/cdn/list/open-dccon/sleeping_ce",
    "imagePrefix": "https://api.probius.dev/twitch-icons/cdn/",
    "type": TYPE.openDccon,
    "nickname": "잠자는꼬마선충"
  },
]
