<!-- JustClear updated at 2016-05-14 -->

<template>
	<div class="loading">
        <p class="loading-text">
            <span class="l">L</span>
            <span class="o">o</span>
            <span class="a">a</span>
            <span class="d">d</span>
            <span class="i">i</span>
            <span class="n">n</span>
            <span class="g">g</span>
            <span class="dot-1">.</span>
            <span class="dot-2">.</span>
            <span class="dot-3">.</span>
        </p>
	</div>
</template>

<style lang="sass">
.loading {
	position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 999;
}
.loading-text {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

    span {
        opacity: 1;
    }

    .l {
        -webkit-animation: transit 2s infinite ease-in-out -.7s;
             -o-animation: transit 2s infinite ease-in-out -.7s;
                animation: transit 2s infinite ease-in-out -.7s;
    }

    .o {
        -webkit-animation: transit 2s infinite ease-in-out -.6s;
             -o-animation: transit 2s infinite ease-in-out -.6s;
                animation: transit 2s infinite ease-in-out -.6s;
    }

    .a {
        -webkit-animation: transit 2s infinite ease-in-out -.5s;
             -o-animation: transit 2s infinite ease-in-out -.5s;
                animation: transit 2s infinite ease-in-out -.5s;
    }

    .d {
        -webkit-animation: transit 2s infinite ease-in-out -.4s;
             -o-animation: transit 2s infinite ease-in-out -.4s;
                animation: transit 2s infinite ease-in-out -.4s;
    }

    .i {
        -webkit-animation: transit 2s infinite ease-in-out -.3s;
             -o-animation: transit 2s infinite ease-in-out -.3s;
                animation: transit 2s infinite ease-in-out -.3s;
    }

    .n {
        -webkit-animation: transit 2s infinite ease-in-out -.2s;
             -o-animation: transit 2s infinite ease-in-out -.2s;
                animation: transit 2s infinite ease-in-out -.2s;
    }

    .g {
        -webkit-animation: transit 2s infinite ease-in-out -.1s;
             -o-animation: transit 2s infinite ease-in-out -.1s;
                animation: transit 2s infinite ease-in-out -.1s;
    }

    .dot-1 {
        -webkit-animation: transit 2s infinite ease-in-out 0s;
             -o-animation: transit 2s infinite ease-in-out 0s;
                animation: transit 2s infinite ease-in-out 0s;
    }

    .dot-2 {
        -webkit-animation: transit 2s infinite ease-in-out .1s;
             -o-animation: transit 2s infinite ease-in-out .1s;
                animation: transit 2s infinite ease-in-out .1s;
    }

    .dot-3 {
        -webkit-animation: transit 2s infinite ease-in-out .2s;
             -o-animation: transit 2s infinite ease-in-out .2s;
                animation: transit 2s infinite ease-in-out .2s;
    }

    @-webkit-keyframes transit {
        0% {
            opacity: 1;
        } 50% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
    @-o-keyframes transit {
        0% {
            opacity: 1;
        } 50% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
    @-moz-keyframes transit {
        0% {
            opacity: 1;
        } 50% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
    @keyframes transit {
        0% {
            opacity: 1;
        } 50% {
            opacity: 0;
        } 100% {
            opacity: 1;
        }
    }
}
</style>
