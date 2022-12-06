import type { NftMeta } from "~/types/nft";
import NftItem from "../item";

type NftListProps = {
  nfts: NftMeta[];
}

export default function NftList({ nfts }: NftListProps) {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map(nftItem => (
        <NftItem key={nftItem.image} nft={nftItem} />
      ))}
    </div>
  );
}