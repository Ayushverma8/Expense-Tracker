import axios from "axios";
import {put, takeLatest} from "redux-saga/effects";
import {
    CREATE_GROUP,
    createGroupResponse, DELETE_GROUP, EDIT_GROUP, editGroupResponse,
    VIEW_GROUP,
    VIEW_GROUPS,
    viewGroupResponse,
    viewGroupsResponse
} from "../actions";
import {showError} from "../../constants";

function* createGroup(action) {
    try {
        const json = yield axios
            .post("/api/create-group/", action.groupData)
            .then((res) => res.data);
        yield put(createGroupResponse(json));
    } catch (err) {
        showError(err);
        yield put(createGroupResponse(err));
    }
}

export function* createGroupSaga() {
    yield takeLatest(CREATE_GROUP, createGroup);
}

function* viewGroups() {
    try {
        const json = yield axios
            .get("/api/view-groups/")
            .then((res) => res.data);
        yield put(viewGroupsResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewGroupsResponse(err));
    }
}

export function* viewGroupsSaga() {
    yield takeLatest(VIEW_GROUPS, viewGroups);
}

function* viewGroup(action) {
    try {
        const json = yield axios
            .get(`/api/view-group/${action.id}`)
            .then((res) => res.data);
        yield put(viewGroupResponse(json));
    } catch (err) {
        showError(err);
        yield put(viewGroupResponse(err));
    }
}

export function* viewGroupSaga() {
    yield takeLatest(VIEW_GROUP, viewGroup);
}

function* editGroup(action) {
    try {
        const json = yield axios
            .put(`/api/edit-group/${action.id}`, action.groupData)
            .then((res) => res.data);
        yield put(editGroupResponse(json));
    } catch (err) {
        showError(err);
        yield put(editGroupResponse(err));
    }
}

export function* editGroupSaga() {
    yield takeLatest(EDIT_GROUP, editGroup);
}

function* deleteGroup(action) {
    try {
        const json = yield axios
            .delete(`/api/delete-group/${action.id}`)
            .then((res) => res.data);
        yield put(editGroupResponse(json));
    } catch (err) {
        showError(err);
        yield put(editGroupResponse(err));
    }
}

export function* deleteGroupSaga() {
    yield takeLatest(DELETE_GROUP, deleteGroup);
}