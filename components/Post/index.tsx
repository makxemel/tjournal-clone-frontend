import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';

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
    </Paper>
  );
};
