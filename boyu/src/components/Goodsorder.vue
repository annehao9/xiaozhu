<template>
    <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="聊天"/>
            <van-goods-action-icon icon="like-o" text="收藏"/>
            <span class="danger">¥200.00/晚</span>
            <van-goods-action-button
                type="danger"
                text="立即预定"
            />
        </van-goods-action>
    </div>
</template>
<style scoped>
.danger{
    font-size: 16px;
    padding:0 20px;
    color:red;
}
</style>