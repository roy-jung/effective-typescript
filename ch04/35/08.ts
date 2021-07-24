export interface getLicense_repository_licenseInfo_3508 {
  __typename: "License";
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId: string | null;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: string;
}

export interface getLicense_repository_3508 {
  __typename: "Repository";
  /** The description of the repository. */
  description: string | null;
  /** The license associated with the repository */
  licenseInfo: getLicense_repository_licenseInfo_3508 | null;
}

export interface getLicense_3508 {
  /** Lookup a given repository by the owner and repository name. */
  repository: getLicense_repository_3508 | null;
}

export interface getLicenseVariables_3508 {
  owner: string;
  name: string;
}
