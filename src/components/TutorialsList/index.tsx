import { connect } from 'react-redux';
import styles from './Tutorials.module.css';
import { removeTutorial, addTutorail } from '@reduxStore/actions/tutorials';

function TutorialItem({ dispatch, tutorials }): React.ReactElement {
    console.log(tutorials);
    return (
        <div className={styles.wrapper}>
            <section>
                <h1>Tutorials:</h1>
                <div className={styles.data}>
                    <div className={styles.adding}>
                        <p className="addTutorial">Add new tutorial</p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            //onChange={ (event) }
                        />
                        <button
                            className={styles.btn}
                            onClick={() =>
                                dispatch(addTutorail(tutorials.push()))
                            }
                        >
                            add
                        </button>
                    </div>
                    <div className={styles.removing}>
                        <p className="removeTutorial">Remove tutorial</p>
                        <input
                            type="text"
                            name="number"
                            placeholder="number"
                            //onChange={ (event) }
                        />
                        <button
                            className={styles.btn}
                            onClick={() =>
                                dispatch(removeTutorial(tutorials.shift()))
                            }
                        >
                            delete
                        </button>
                    </div>
                    <div className={styles.links}>
                        {tutorials.map((tutorial) => (
                            <div>{tutorial.title}</div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

const mapStateToProps = (state: { tutorials: any }) => {
    return {
        tutorials: state.tutorials,
    };
};

const mapDispatchToProps = (dispatch: (arg0: any) => any) => {
    return {
        dispatch,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialItem);
