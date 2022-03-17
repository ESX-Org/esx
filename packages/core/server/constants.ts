export const INTERNAL_RPC_DRIVER = "__ESX_DRIVER"
export const INTERNAL_ARGS = "__ESX_ARG_REFL"
export const META_KEY = "__ESX_META_BUCKET"

export const GET_PLAYER_DECL_ARG = "GET_PLAYER"
export const GET_SOURCE_DECL_ARG = "GET_SOURCE"
export const GET_PAYLOAD_DECL_ARG = "GET_PAYLOAD"

export type NET_DECL_ARGS = typeof GET_PLAYER_DECL_ARG | typeof GET_SOURCE_DECL_ARG | typeof GET_PAYLOAD_DECL_ARG

export const GET_REFLECTOR_DECL_ARG = "GET_REFLECTOR"

export const CLASSWIDE_META = "CLASS_META"
export const metaName = (name: string) => `_META:${name}`
