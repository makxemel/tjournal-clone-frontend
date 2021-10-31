import React from 'react';
import { IconButton, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import {
  ModeCommentOutlined as CommentsIcon,
  RepeatOutlined as RepostIcon,
  BookmarkBorderOutlined as FavoriteIcon,
  ShareOutlined as ShareIcon,
} from '@material-ui/icons';

import styles from './Post.module.scss';

export const Post: React.FC = () => {
  return (
    <Paper classes={{ root: styles.paper }} elevation={0} className="p-20">
      <Typography variant="h5" className={styles.title}>
        Утерянное искусство граффити во «ВКонтакте»: за что любили рисунки на «стенах» и почему
        функцию давно забыли
      </Typography>
      <Typography className="mt-10 mb-15">
        С помощью встроенного редактора рисовали и примитивные сердечки друзьям, и гиперреалистичные
        картины в тематических группах. TJ пообщался с авторами граффити, чтобы вспомнить, как это
        было.
      </Typography>
      <Image
        src="https://leonardo.osnova.io/6beb78f6-3f43-5a5a-8c69-0c8b9ca91592/-/preview/900/-/format/webp/"
        height={500}
        width={600}
      />
      <div>
        <ul className={styles.actions}>
          <li>
            <IconButton size="small">
              <CommentsIcon />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <RepostIcon />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <FavoriteIcon />
            </IconButton>
          </li>
          <li>
            <IconButton size="small">
              <ShareIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </Paper>
  );
};
