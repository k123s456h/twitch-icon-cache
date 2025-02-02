export const STREAM_PLATFORM = ['twitch', 'chzzk', 'youtube'] as const;

export type StreamPlatform = (typeof STREAM_PLATFORM)[number];

type StreamPlatformWithoutTwitch = Exclude<StreamPlatform, 'twitch'>;

export interface StreamerData {
  name: {
    twitch: string;
  } & { [key in StreamPlatformWithoutTwitch]: string | null };
  url: string;
  type: number;

  imagePrefix?: string;
  id?: {
    twitch: number;
  } & { [key in StreamPlatformWithoutTwitch]: number | null };
  nickname?: string;
}

// iconProcessor 메인 함수 타입
export type IconProcessorFunction = (streamer: StreamerData) => void;

// iconProcessor 함수 목록 타입
export interface IconProcessorFunctionList {
  [key: string]: IconProcessorFunction;
}

////////////////////////////////////////////////////////////
/**
 * 공통으로 쓰이는 프로토타입들
 */

/**
 * 아이콘 프로토타입.
 * 필수 공통 요소는 keywords, tags와 이미지 주소임.
 * 근데 이미지 주소를 uri로 하거나 path로 설정하는 사람도 있음.
 * 그래서 마지막으로 [key: string]: any를 추가했음.
 */
export interface IconPrototype {
  keywords: string[];
  tags: string[];
  name?: string;
  uri?: string;
  path?: string;
  url?: string;
}
export type IconProps = 'keywords' | 'tags' | 'name' | 'uri' | 'path' | 'url';

/**
 * 아이콘 목록 프로토타입.
 * 아이콘 목록과 기타 정보가 있음
 */
export interface IconIndexPrototype {
  timestamp?: number;
}

////////////////////////////////////////////////////////////
export const ICON_INDEX_FORMAT = [
  'brigebbcc',
  'opendccon',
  'chatassistx',
] as const;

export type IconIndexFormat = (typeof ICON_INDEX_FORMAT)[number];

export interface IconOpenDccon extends IconPrototype {
  path: string;
}

export interface IconIndexOpenDccon extends IconIndexPrototype {
  dccons: IconOpenDccon[];
}

export interface IconBridgeBBCC extends IconPrototype {
  name: string;
}

export interface IconIndexBridgeBBCC extends IconIndexPrototype {
  dcConsData: IconBridgeBBCC[];
}

////////////////////////////////////////////////////////////
/**
 * 이 서버를 통해서 전송되는 데이터의 형식을 나타냄.
 */

export interface Icon extends IconPrototype {
  name: string;
  uri: string;
  tags: string[];
  keywords: string[];

  nameHash: string;
  thumbnailUri: string;
  useOrigin: boolean;
  originUri: string;
}

export interface IconIndex extends IconIndexPrototype {
  icons: Icon[];
  timestamp: number;
}
