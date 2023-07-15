import { useEffect, useRef } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  const oneUseEffect = useRef(true);
  useEffect(() => {
    if (oneUseEffect.current) {
      oneUseEffect.current = false;

      loadPosts({
        authorSlug: 'matheus-mozart',
      }).then((r) => {
        console.log(r.setting, r.posts);
      });
    }
  }, []);

  return <h1>OI</h1>;
}
