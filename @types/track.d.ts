interface Visual {
  urn: string;
  entry_time: number;
  visual_url: string;
}

export interface Track {
  artwork_url?: string;
  caption?: string;
  commentable: boolean;
  comment_count: number;
  created_at: Date;
  description?: string;
  downloadable: boolean;
  download_count: number;
  duration: number;
  full_duration: number;
  embeddable_by: string;
  genre: string;
  has_downloads_left: boolean;
  id: number;
  kind: string;
  label_name?: string;
  last_modified: Date;
  license: string;
  likes_count: number;
  permalink: string;
  permalink_url: string;
  playback_count: number;
  public: boolean;
  publisher_metadata: {
    id: number;
    urn: string;
    artist: string;
    contains_music: boolean;
    publisher: string;
    isrc: string;
    explicit: boolean;
    p_line: string;
    p_line_for_display: string;
    writer_composer: string;
    release_title: string;
  };
  purchase_title?: string;
  purchase_url?: string;
  release_date: Date;
  reposts_count: number;
  secret_token?: string;
  sharing: string;
  state: string;
  streamable: boolean;
  tag_list: string;
  title: string;
  track_format: string;
  uri: string;
  urn: string;
  user_id: number;
  visuals?: Visual;
  waveform_url: string;
  display_date: Date;
  media: {
    transcodings: {
      url: string;
      preset: string;
      duration: number;
      snipped: boolean;
      format: {
        protocol: string;
        mime_type: string;
      };
      quality: string;
    }[];
  };
  station_permalink: string;
  monetization_model: string;
  policy: string;
  user: {
    avatar_url: string;
    city: string;
    comments_count: number;
    country_code: number;
    created_at: Date;
    description?: string;
    followers_count: number;
    followings_count: 44;
    first_name: string;
    full_name: string;
    groups_count: number;
    id: number;
    kind: number;
    last_modified: Date;
    last_name: string;
    likes_count: number;
    playlist_likes_count: number;
    permalink: string;
    permalink_url: string;
    playlist_count: number;
    reposts_count?: number;
    track_count: number;
    uri: string;
    urn: string;
    username: string;
    verified: boolean;
    visuals: {
      urn: string;
      enabled: boolean;
      visuals: Visual[];
    };
    badges: {
      pro: boolean;
      pro_unlimited: boolean;
      verified: boolean;
    };
    station_permalink: string;
  };
}
