type CloudinaryImage = {
  asset_id: string;
  public_id: string;
  folder: string;
  filename: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  uploaded_at: string;
  bytes: number;
  backup_bytes: number;
  width: number;
  height: number;
  aspect_ratio: number;
  pixels: number;
  url: string;
  secure_url: string;
  status: string;
  access_mode: string;
  access_control: null | unknown;
  etag: string;
  created_by: object;
  uploaded_by: object;
};

export type CloudinaryResponse = {
  rate_limit_allowed: number;
  rate_limit_reset_at: Date;
  rate_limit_remaining: number;
  resources: CloudinaryImage[];
};

export type ImageProps = {
  id: number;
  height: number;
  width: number;
  src: string;
  blurUrl?: string;
};
