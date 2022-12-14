import React from 'react';
import { useIntl } from 'react-intl';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { PluginInfos, getPluginInfos } from '@common/plugin';
import PricingSupport from '@app/PricingSupport';
import layoutStyles from './Layout.module.css';
import styles from './_app.module.css';
import Home from './index';

export const getStaticProps: GetStaticProps<{
  plugin: PluginInfos;
}> = async (context) => ({
  props: {
    plugin: await getPluginInfos(),
  },
});

const Supporter: React.FC<
  InferGetServerSidePropsType<typeof getStaticProps>
> = ({ plugin }) => {
  const { formatMessage } = useIntl();
  return (
    <div className={layoutStyles.wrapper}>
      <h1 className={styles.title}>
        {formatMessage({ id: 'supporter.title' })}
      </h1>
      <p>{formatMessage({ id: 'supporter.desc' })}</p>
      <PricingSupport onylSupport />
    </div>
  );
};

export default Supporter;
