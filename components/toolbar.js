import {useRouter} from 'next/router';
import styles from '../styles/Toolbar.module.css'
export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main} >
        <div onClick={() => router.push('/')} >Home</div>
        <div onClick={() => router.push('/feed/1')}>Feed</div>
        <div onClick={() => router.push('/eom')}>EOM</div>
        <div onClick={() => window.location.href= 'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-700x467.jpg'}>Twitter</div>

        </div>
    )

}